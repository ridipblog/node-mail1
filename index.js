const nodemailer=require('nodemailer');
const env=require('dotenv');
env.config({path:'./config.env'});
let transport=nodemailer.createTransport({
	service:"gmail",
	auth:{
		user:process.env.EMAIL,
		pass:process.env.PASSWORD
	}
});
let mailOptions={
	from:process.env.EMAIL,
	to:process.env.TO,
	subject:"testing 1",
	text:"tesing text is here",
	attachments:[
		{filename:"coder.jpg",path:"./coder.jpg"}
	]
};
transport.sendMail(mailOptions,(err,data)=>{
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("Send Mail");
	}
})