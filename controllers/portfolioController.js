const sendEmailController = (req,resp)=> {
try {
    return resp.status(200).send({
        success:true,
        massage:'your massage send successfully',
        
    })
} catch (error) {
    console.log(error)
    return resp.status(500).send({
        success:false,
        massage:'send email api error',
        
    })
}
};

module.exports = {sendEmailController};