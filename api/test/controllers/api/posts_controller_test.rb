require 'test_helper'

class Api::PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get api_posts_url, as: :json
    assert_response :success
  end

  test "should create post" do
    assert_difference('Post.count') do
      post api_posts_url, params: { post: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show post" do
    get api_post_url(@post), as: :json
    assert_response :success
  end

  test "should update post" do
    patch api_post_url(@post), params: { post: {  } }, as: :json
    assert_response 200
  end

  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete api_post_url(@post), as: :json
    end

    assert_response 204
  end
end
