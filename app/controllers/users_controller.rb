class UsersController < ApplicationController
  def index
    @user = User.new
  end
  
  def create
    @user = User.new
    @user.name = params[:name]
    @user.right = params[:right].to_i
    @user.wrong = params[:wrong].to_i
    @user.level = params[:level]
    if params[:operator] == "a"
      @user.operator = "+"
    else
    end
    @user.save

    respond_to do |format|
       format.json {render :json => @user}
    
    end

    
  end

end
