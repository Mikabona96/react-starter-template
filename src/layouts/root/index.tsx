import { Outlet, Link } from '@tanstack/react-router';
import styled from 'styled-components';

const LinkPropsObj = {
  activeProps: {
    style: {
      fontWeight: 'bold',
      color: 'blue',
    },
  },
  inactiveProps: {
    style: {
      textDecoration: 'none',
    },
  },
};

const Title = styled.h3`
  color: ${({ theme }) => theme.palette.purple.main};
  font-size: 26px;
`;

export const RootLayout = () => {
  return (
    <div>
      <Title>Hello form Root Layout</Title>
      <br />
      <br />
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to='/' {...LinkPropsObj}>
          Home
        </Link>
        <Link to='/about' {...LinkPropsObj}>
          About
        </Link>
        <Link to='/news' {...LinkPropsObj}>
          {({ isActive }) => <>News {isActive && '~'}</>}
        </Link>
        <Link
          to='/news/$id'
          params={{ id: '123' }}
          hash={'section-1'}
          search={{ _start: 0, limit: 5 }}
          {...LinkPropsObj}
        >
          News id 123
        </Link>
        <Link to='/nested' {...LinkPropsObj}>
          Nested Page
        </Link>
      </div>
      <br />
      <Outlet />
    </div>
  );
};
