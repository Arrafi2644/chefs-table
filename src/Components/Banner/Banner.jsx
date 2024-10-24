
import background from '../../assets/images/chef-banner.png'

const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-screen rounded-xl my-6"
  style={{
    backgroundImage: `url(${background})`
  }}>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center w-4/5">
    <div className="w-full">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <div className='flex gap-2 items-center justify-center'>
      <button className="btn bg-green-400 rounded-xl border-none">Explore Now</button>
      <button className="btn bg-transparent text-white rounded-xl">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;