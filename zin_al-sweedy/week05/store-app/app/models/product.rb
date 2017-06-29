# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string
#  number     :integer
#  quantity   :string
#  price      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
has_and_belongs_to_many :catogeries
has_and_belongs_to_many :sales
end
