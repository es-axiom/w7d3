Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:new, :edit, :show], defaults: { format: :json }
  end
  resources :staticpages, only: :index

  root to: 'static_pages#index'
end
