import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='text-slate-200'>{name} Profile</span>
      </h1>
      <p className='mt-5 text-lg text-slate-200 sm:text-xl max-w-2xl'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
