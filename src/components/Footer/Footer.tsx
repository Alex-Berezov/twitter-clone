import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { useFooterStyles } from './footerStyles';

const FooterLinks = () => {
  const classes = useFooterStyles();

  return (
    <Typography className={classes.footerLinks} variant="body2">
      <Link color="inherit" href="https://about.twitter.com/">
        About us
      </Link>
      <Link color="inherit" href="https://help.twitter.com/">
        Help Center
      </Link>
      <Link color="inherit" href="https://twitter.com/tos">
        Terms of Service
      </Link>
      <Link color="inherit" href="https://twitter.com/privacy">
        Privacy Policy
      </Link>
      <Link color="inherit" href="https://support.twitter.com/articles/20170514">
        Cookie Policy
      </Link>
      <Link color="inherit" href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html">
        Advertising information
      </Link>
      <Link color="inherit" href="https://blog.twitter.com/">
        Blog
      </Link>
      <Link color="inherit" href="https://status.twitterstat.us/">
        Status
      </Link>
      <Link color="inherit" href="https://careers.twitter.com/">
        Сareers
      </Link>
      <Link color="inherit" href="https://about.twitter.com/press/brand-assets">
        Brand resources
      </Link>
      <Link color="inherit" href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise">
        Advertisement
      </Link>
      <Link color="inherit" href="https://marketing.twitter.com/">
        Marketing
      </Link>
      <Link color="inherit" href="https://business.twitter.com/">
        Twitter for Business
      </Link>
      <Link color="inherit" href="https://developer.twitter.com/">
        For developers
      </Link>
      <Link color="inherit" href="https://twitter.com/i/directory/profiles">
        Catalog
      </Link>
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="body2">
      {'© Twitter, Inc., '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StickyFooter = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <Container className={classes.container} maxWidth="xl">
          <FooterLinks />
          <Copyright />
        </Container>
      </div>
    </div>
  );
}

export default StickyFooter;