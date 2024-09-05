"use client";

const InputComment = () => {
    let opinion:string = '';

    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        opinion = target.value;
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(opinion);
        
    }
  return (
    <form onSubmit={handleSubmit} className="w-2/3 p-2 border rounded-md">
        <input onChange={handleInput} type="text" name="" id="" placeholder="Add your opinion / comment"  className="w-full border-none placeholder:text-base text-primary outline-none bg-transparent"/>
    </form>
  )
}

export default InputComment;