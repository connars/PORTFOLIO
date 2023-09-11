import notFound from './../../assets/images/404.png'

function NotFound() {
  return (
    <div style={{height: '700px', width: '100%'}} className='flex justify-center flex-col items-center'>
        <img style={{width: '500px'}}  src={notFound} alt='Page 404' />
        <p>
            Извините, но запрашиваемая вами страница не существует.
        </p>
    </div>
  );
}

export default NotFound;