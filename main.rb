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
  @color = "black"
  erb :index
end

get '/echo' do
  @color = "black"

  @projectName = "Echo"
  @projectInfo = "Using critical design, echo is a comment on a possible shift to a narcissistic society as a result of increasing interaction with social media.
  <br><br>
  Despite the negativity towards narcissism, it is emerging as a social alternative and, thus, should be embraced as a new commercial market.
  <br><br>
  Using facial recognition software, the fluid mirror analyses facial features and transforms them into a unique soundscape. Thus luring the user into their own image.
  <br><br>
  The I'mbrella - an oversized umbrella for one - is a comment on how our narcissistic tendencies are impacting the way in which we interact with others in public social situations."
  erb :project
end

get '/test' do
  erb :test
end
