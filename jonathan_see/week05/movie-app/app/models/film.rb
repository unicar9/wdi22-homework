# == Schema Information
#
# Table name: films
#
#  id           :integer          not null, primary key
#  title        :text
#  country      :text
#  running_time :text
#  release_date :text
#  image        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Film < ApplicationRecord
end
