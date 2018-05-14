class PagesController < ApplicationController
  def home
    @first_post_id = Post.first.id
  end
end
