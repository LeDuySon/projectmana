import React, { Component } from 'react';


class Project extends Component {
  constructor(props){
	super(props);
	this.handlename = this.handlename.bind(this);
	this.handlecontent = this.handlecontent.bind(this);
	this.handledeadline = this.handledeadline.bind(this);
	this.handlemembers = this.handlemembers.bind(this);
	this.handleupload = this.handleupload.bind(this);
	this.handlegoal = this.handlegoal.bind(this)
	
	
}


  




  handlename(e) {
  	this.props.createproj(e.target.value, this.props.proj.content,this.props.proj.members, this.props.proj.deadline, this.props.proj.upload,this.props.proj.goal)
	
  }

  handlecontent(e) {
  	this.props.createproj(this.props.proj.name, e.target.value,this.props.proj.members, this.props.proj.deadline, this.props.proj.upload,this.props.proj.goal)
  }

  handledeadline(e) {
  	this.props.createproj(this.props.proj.name, this.props.proj.content,this.props.proj.members, e.target.value, this.props.proj.upload,this.props.proj.goal)
  }

  handlemembers(e) {
  	this.props.createproj(this.props.proj.name, this.props.proj.content, e.target.value, this.props.proj.deadline, this.props.proj.upload,this.props.proj.goal)
  }

  handleupload(e) {
  	this.props.createproj(this.props.proj.name, this.props.proj.content,this.props.proj.members, this.props.proj.deadline, e.target.files[0],this.props.proj.goal);
  	return true
  	

  }

  handlegoal(e) {
  	this.props.createproj(this.props.proj.name, this.props.proj.content,this.props.proj.members, this.props.proj.deadline, this.props.proj.upload, e.target.value)
  }



  


  render() {	
	return (

			<div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="card-title" id="title1">Create project</div>
                  
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="projectname">Tên project</label>
                      <input type="text" className="form-control" id="projectname" onChange={this.handlename} placeholder="Project"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="content">Nội dung</label>
                      <input type="text" className="form-control" id="content" onChange={this.handlecontent} placeholder="Content"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="members">Thành viên tham gia</label>
                      <input type="text" className="form-control" id="members" onChange={this.handlemembers} placeholder="Name"/>
                    </div>
                    
                    <div className="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" className="file-upload-default"/>
                      <div className="input-group col-xs-12">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload File"/>
                        <span className="input-group-append">
                          <button className="file-upload-browse btn btn-gradient-primary" type="button" onChange={this.handleupload} >Upload</button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="deadline">Deadline</label>
                      <input type="text" className="form-control" id="deadline" onChange={this.handledeadline} placeholder="Time"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Goal">Mục tiêu</label>
                      <textarea className="form-control" id="Goal" rows="4" onChange ={this.handlegoal}></textarea>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div> 

			 
			  
			  
			
		  


			  
		  
	);
  }
}

export default Project;
