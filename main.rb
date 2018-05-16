require 'sinatra'
require_relative 'models/carrierwave-config'
require 'carrierwave'



get '/' do
  erb :index
end
