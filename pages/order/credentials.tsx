import Navigation from "@/components/navigation";
import {useState} from 'react'
function Credentials(){
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // You can now use the email, name, and address values as needed
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Address:', address);
  };
    return <section className='max-w-[1200px] m-auto'>
        <Navigation/>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
}
export default Credentials;