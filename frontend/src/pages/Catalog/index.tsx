import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { Product } from 'core/types/product';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardLoader from './CardLoader';
import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/products`,
      params: {
        page: 0,
        size: 8,
      },
    };

    setIsloading(true);
    requestBackend(params)
      .then(response => {
        setPage(response.data);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map(product => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to="/products/1">
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
