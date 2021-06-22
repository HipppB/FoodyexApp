<?php

namespace App\Repository;

use App\Entity\Plat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Plat|null find($id, $lockMode = null, $lockVersion = null)
 * @method Plat|null findOneBy(array $criteria, array $orderBy = null)
 * @method Plat[]    findAll()
 * @method Plat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Plat::class);
    }

    // /**
    //  * @return Plat[] Returns an array of Plat objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Plat
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
