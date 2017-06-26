require 'test_helper'

class MagicControllerTest < ActionDispatch::IntegrationTest
  test "should get play" do
    get magic_play_url
    assert_response :success
  end

end
