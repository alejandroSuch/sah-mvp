package com.veamospues.sahmvp.repository.adapter;

import com.veamospues.sahmvp.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SpringDataPropertyRepository extends JpaRepository<Property, Long>, PagingAndSortingRepository<Property, Long> {
}
