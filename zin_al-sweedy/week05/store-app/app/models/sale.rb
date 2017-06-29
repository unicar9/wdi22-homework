# == Schema Information
#
# Table name: sales
#
#  id         :integer          not null, primary key
#  number     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sale < ApplicationRecord
  has_and_belongs_to_many :products
  has_and_belongs_to_many :catogeries

  # has_many :catogeries, through: :products

end
