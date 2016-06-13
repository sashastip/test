Rails.application.routes.draw do

  devise_for :users#, controllers: { sessions: 'users/sessions' }

  root to: 'application#index'

  resources :posts
end
