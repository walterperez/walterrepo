const wordFinder = function(word,documentFile){
    const indxWord = documentFile.serch(word);
    if(indxWord){
        return indxWord;
    }else{
        return null;
    }

};

export default wordFinder;