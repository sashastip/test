Rails.application.routes.draw do

  root to: 'application#index'

  resources :users, only: [:index, :show]

  devise_for :users

  resources :posts
end
