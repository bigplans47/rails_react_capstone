Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [ :show, :create, :destroy ]
  end
end
