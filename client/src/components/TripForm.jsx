import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TripForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startLocation: '',
    endLocation: '',
    preferences: '',
    dates: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/generate', formData);
      // Redirect to MyTrips after success
      navigate('/my-trips');
    } catch (error) {
      console.error("Trip generation failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields here, with onChange={handleChange} and name attributes */}
    </form>
  );
};
