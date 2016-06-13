class ApplicationController < ActionController::Base
  respond_to :json, :html
  
  protect_from_forgery with: :exception

  def index
    render 'layouts/application'
  end
end
