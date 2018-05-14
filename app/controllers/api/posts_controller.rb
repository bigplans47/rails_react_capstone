class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @post = Post.find(params[:id])
  end
  def create
    @single_post = Post.create!(post_params)
  end

  private
  def post_params
    params.permit(:thought, :feeling, :body_sensation, :thought_rating, :feeling_rating, :body_sensation_rating, :hour_sleep, :hour_work, :hour_excercise, :hour_open, :hour_mediate, :acceptance, :text_body)
  end
end
