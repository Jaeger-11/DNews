import { article } from "./interface";
import { useAxios } from "./axios";

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${day}-${month}-${year} ${formattedHours}:${formattedMinutes}`;
}

export const shuffleArticle = (list:article[]) => {
    let updatedList = [...list]
    var currentIndex = updatedList.length; 
    var randomIndex;
    var temporaryValue;

    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = updatedList[currentIndex];
        updatedList[currentIndex] = updatedList[randomIndex];
        updatedList[randomIndex] = temporaryValue
    }
    
    return updatedList.slice(0,4)
}

export const FetchArticles = async () => {
    const { data } = await useAxios('/posts')
    return data;
}

export const FetchArticle = async (id:string) => {
    const { data } = await useAxios(`/posts/${id}`)
    return data
}

export const FetchComments = async (id:string) => {
    const { data } = await useAxios(`/posts/${id}/comments`);
    return data
}