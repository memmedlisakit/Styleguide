# myapp.rb
require 'sinatra'
require_relative 'utils/markdown'


set :public_folder, File.dirname(__FILE__) + '/public'
set :bind, '0.0.0.0'
set :port, "3333"

helpers do
  def include_doc(name)
    parse_markdown(File.read("docs/#{name}.md"))
  end
end


get '/' do
  erb :index, layout: :application_layout
end