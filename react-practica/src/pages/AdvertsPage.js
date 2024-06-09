import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchTags } from '../redux/advertsSlice';
import { Link } from 'react-router-dom';
import { MDBRow } from 'mdb-react-ui-kit';
import AdvertItem from '../components/adverts/AdvertItem';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

const AdvertsPage = () => {
  const dispatch = useDispatch();
  const { adverts, tags, loading } = useSelector((state) => state.adverts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchAdverts());
    dispatch(fetchTags());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredAdverts = adverts.filter((advert) =>
    advert.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <h1>Listado de Anuncios</h1>
      <input
        type="text"
        placeholder="Filtrar anuncios"
        value={filter}
        onChange={handleFilterChange}
      />
      {loading ? (
        <Loader />
      ) : filteredAdverts.length > 0 ? (
        <MDBRow>
          {filteredAdverts.map((advert) => (
            <AdvertItem key={advert.id} advert={advert} />
          ))}
        </MDBRow>
      ) : (
        <div>
          <p>No hay anuncios disponibles.</p>
          <Link to="/adverts/new">Crear un nuevo anuncio</Link>
        </div>
      )}
    </>
  );
};

export default AdvertsPage;
