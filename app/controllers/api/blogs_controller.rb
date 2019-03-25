class Api::BlogsController < ApplicationController
before_action :set_blog, only: [:update, :destroy, :show]
  def index
    render json: Blog.all
  end

  def show
    renderjson: @blog
  end

  def create
    blog = Blod.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: blog.errors, status: 422
    end
  end

  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: 422
    end
  end

  def destroy
    @blog.destroy
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :body, :author, :picture)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
