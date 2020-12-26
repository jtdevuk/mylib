Rails.application.routes.draw do
  devise_for :users
 get "/search", to: "pages#search"
 root to: "pages#home"
end
