require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/assets'

get '/*' do
  erb :index, :locals => { :params => params[:splat]}
end

