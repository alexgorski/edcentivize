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
    if parmas[:operator] == "a"
      @user.operator = "+"
    else
    end

    @user.save

    respond_to do |format|
      if @user.save
        format.js   {}      
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end
