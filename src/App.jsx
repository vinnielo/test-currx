import * as React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home.jsx';

const root = createRoot(document.body);
root.render(<Home />);