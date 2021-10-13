import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { ImNewspaper, ImCalculator } from 'react-icons/im';
import { HiCurrencyRupee } from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'News',
    path: '/news',
    icon: <ImNewspaper />,
    cName: 'nav-text',
  },
  {
    title: 'Exchanges',
    path: '/exchanges',
    icon: <FaExchangeAlt />,
    cName: 'nav-text',
  }, {
    title: 'Cryptocurrencies',
    path: '/cryptocurrencies',
    icon: <HiCurrencyRupee />,
    cName: 'nav-text',
  },
  {
    title: 'Calculator',
    path: '/calci',
    icon: <ImCalculator />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
