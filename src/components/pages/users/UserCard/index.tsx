import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { Mail, Phone, MapPin, User2, ExternalLink } from 'lucide-react';
import {
  creatWebsiteUrl,
  createGoogleMapUrl,
  createMailtoUrl,
  createPhoneUrl
} from '@/utils/url';
import type { User } from '@/types';
import styles from './style.module.scss';
import { Skeleton } from '@/components/ui/skeleton';

type Props = { user: User; showSkeleton?: never } | { showSkeleton: true; user?: never };

const UserCard = ({ user, showSkeleton }: Props) => {
  if (showSkeleton) {
    return (
      <Card className={styles.skeletonContainer}>
        <Skeleton className={styles.titleSkeleton} />
        <div className={styles.addressContainer}>
          <Skeleton className={styles.addressSkeleton} />
          <Skeleton className={styles.addressSkeleton} />
          <Skeleton className={styles.addressSkeleton} />
        </div>
        <Skeleton className={styles.footerSkeleton} />
      </Card>
    );
  }
  const { id, name, email, phone, website, address } = user;
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle className={styles['cardHeader__titleContainer']}>
          <User2 />
          <p className={styles['cardHeader__titleContainer__title']}>{name}</p>
        </CardTitle>
        <Link
          className={styles['cardHeader__website']}
          target='_blank'
          href={creatWebsiteUrl(website)}
        >
          <CardDescription>{website}</CardDescription>
          <ExternalLink size={15} />
        </Link>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <small className={styles['cardContent__addressText']}>
          {' '}
          City : {address.street}
        </small>
        <small className={styles['cardContent__addressText']}>
          Address : {address.street} , {address.suite}
        </small>
        <small className={styles['cardContent__addressText']}>
          {' '}
          PostalCode : {address.zipCode}
        </small>
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <Link
          className={styles['cardFooter__titleContainer']}
          target='_blank'
          title='show on map'
          href={createGoogleMapUrl(address.geo)}
        >
          <MapPin size={15} className={styles['cardFooter__icon']} />
          <p>Location</p>
        </Link>

        <Link
          href={createPhoneUrl(phone)}
          className={styles['cardFooter__titleContainer']}
        >
          <Phone size={15} className={styles['cardFooter__icon']} />
          <p>{phone}</p>
        </Link>

        <Link
          target='_blank'
          title='send email'
          href={createMailtoUrl(email)}
          className={styles['cardFooter__titleContainer']}
        >
          <Mail size={15} className={styles['cardFooter__icon']} />
          <p>{email}</p>
        </Link>
      </CardFooter>
    </Card>
  );
};

export { UserCard };
