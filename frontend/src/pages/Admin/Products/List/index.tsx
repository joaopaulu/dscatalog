import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';
import { Product } from 'core/types/product';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCrudCard from '../ProductCardCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', category: null },
    });

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getProducts = useCallback(
    (pageNumber: number) => {
      const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/products',
        params: {
          page: controlComponentsData.activePage,
          size: 3,
          name: controlComponentsData.filterData.name,
          categoryId: controlComponentsData.filterData.category?.id,
        },
      };

      requestBackend(config).then(response => {
        setPage(response.data);
      });
    },
    [controlComponentsData],
  );

  useEffect(() => {
    getProducts(0);
  }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <ProductFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map(product => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard
              product={product}
              onDelete={() => getProducts(page.number)}
            />
          </div>
        ))}
      </div>
      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getProducts}
      />
    </div>
  );
};

export default List;
