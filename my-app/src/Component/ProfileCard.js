const ProfileCard = ({ peopleList }) => {
  return (
    <div>
      {peopleList.map((i) => (
        <div>
          <img src={i.imageSrc} alt="Person" />
          <h2>{i.fullName}</h2>
          <h3>{i.bio}</h3>
          <p>{i.profession}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
