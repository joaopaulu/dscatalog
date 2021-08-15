import { Route, Switch } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import './styles.css';
import Users from './User';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Switch>
          <Route path="/admin/products">
            <h1>Product CRUD</h1>
          </Route>
          <Route path="/admin/categories">
            <h1>Categorie CRUD</h1>
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
