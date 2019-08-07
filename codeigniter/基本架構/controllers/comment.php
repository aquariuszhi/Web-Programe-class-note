<?php
	class Comment extends CI_Controller{
		
		public function __construct(){
			parent::__construct();
			$this->load->model('comment_model');
			$this->load->library('session');  //引入session資料庫
			
			$this->load->library('pagination'); //引入分頁資料庫
		}
		
		public function comment(){
			$data['comment'] = $this->comment_model->getcomment();
			
			$this->load->helper('form'); //顯示表單元素並增加一些額外功能，例如增加一個隱藏的 CSRF 預防欄位
			$this->load->library('form_validation'); //表單驗證錯誤時，用來顯示錯誤訊息
			
			$this->form_validation->set_rules('comment', 'comment', 'required');
			//set_rules() 方法需要三個參數，輸入欄位的名稱，用來顯示在錯誤訊息中的名稱，以及規則。 在這個例子中使用的規則，用來表示標題及內文都是必要的欄位。
			
			$nickname = $this->session->userdata('nickname');
			parse_str($_SERVER['QUERY_STRING'], $_GET);  //取得url/?str參數

		}
		
	}