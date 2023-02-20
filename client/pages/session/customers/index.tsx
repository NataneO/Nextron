import CustomerProfile from "./components/customerProfile";
import CustomerNavigation from "./components/customerNavigation";


export default function Customers() {
  return (
    <div>
        <button className="customer__toggle-button">btn</button>
      <div className="customer__alert">alert</div>
     <CustomerProfile/>
     <CustomerNavigation/>
    </div>
  )
}
