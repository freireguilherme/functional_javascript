function checkUsersValid(goodUsers){
  return (submittedUsers) =>{          									//
    return submittedUsers.every((submittedUser) =>{     //todo (every) usuario deve seguir uma condição
      return goodUsers.some((goodUser) =>{            	//a condição é ter id igual, apenas alguns (some) terão
        return submittedUser.id === goodUser.id;    		//
      });
    });
  };
};

export default checkUsersValid;