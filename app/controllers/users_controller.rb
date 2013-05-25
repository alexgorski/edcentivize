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
    elsif params[:operator] == "b"
      user.operator = "-"
    elsif params[:operator] == "c"
        user.operator = "*"
    elsif params[:operator] == "d"
        user.operator = "/"
    else
    end
    @user.save

    respond_to do |format|
       format.json {render :json => @user}#need to add @user.find_user_rank to json
    
    end

    
  end

end
