require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'models/carrierwave-config'
# require 'active_record'
require 'carrierwave'
# require 'carrierwave/orm/activerecord'
# require 'cloudinary'
# require_relative 'models/asset'



get '/' do

  erb :index
end

get '/echo' do

  erb :project
end
