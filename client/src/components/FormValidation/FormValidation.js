
const formValidation = (data) =>{
    const errors = {}
    const regex = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)$/
    if(data.name.length > 20){
        errors.name = "The name connot be longer than 20 characters"
    }

    if(!data.image || !regex.test(data.image)){
        errors.image = "You need to put a image"
    }

    if(!data.types){
        errors.types = "You need at to choose at least 1 type"
    }

    if(data.hp > 900){
        errors.hp = "The hp cannot be more than 900 hp"
    }

    if(data.attack > 1200){
        errors.attack = "the attack cannot be more than 1200"
    }

    if(data.speed > 120){
        errors.speed = "the speed limit its 120"
    }

    if(data.height > 220){
        data.height = "The height cannot be more than 220 meters"
    }

    if(data.weight > 30000000){
        data.weight = "It's not a mountain"
    }
    return errors
}

export default formValidation