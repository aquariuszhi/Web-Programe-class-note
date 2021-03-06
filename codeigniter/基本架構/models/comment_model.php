<?php
	class Comment_model extends CI_Model{
		public function __construct(){
			$this->load->database();  //引入database設定檔
			$this->load->library('session');
		}
		
		public function get_comment($limit,$offset){
			$query = $this->db->order_by('id_main', 'desc')->limit($limit, $offset)->get('maincomment');
			return $query->result_array();
		}

		public function get_last_comment(){
			$query = $this->db->order_by('id_main', 'desc')->limit(1)->get('maincomment');
			return $query->row_array();
		}
		
		public function set_main_comment(){
			$this->load->helper('url');
						
			$data = array(
				'nickname' => $this->session->userdata('nickname'),
				'comment' => $this->input->post('comment')
			);

		return $this->db->insert('maincomment',$data);
		}
		
		public function get_del_comment($id_main){
			$query = $this->db->get_where('maincomment', array('id_main' => $id_main));
			return $query->row_array();
		}
		
		public function set_delete_comment($id_main){
			$tables = array('maincomment', 'childcomment');
			$this->db->where('id_main', $id_main);
			
			return $this->db->delete($tables);
		}
		
		public function get_count() {
			return $this->db->count_all('maincomment');
		}
	}