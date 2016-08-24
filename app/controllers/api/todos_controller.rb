class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    title = params["Todo"]["title"]
    body = params["Todo"]["body"]
    Todo.create(title: title, body: body)
    render json: Todo.all.last
  end

  def update

  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: Todo.all
  end
end
