package com.heavenscode.rac.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class ServicesubcategoryAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertServicesubcategoryAllPropertiesEquals(Servicesubcategory expected, Servicesubcategory actual) {
        assertServicesubcategoryAutoGeneratedPropertiesEquals(expected, actual);
        assertServicesubcategoryAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertServicesubcategoryAllUpdatablePropertiesEquals(Servicesubcategory expected, Servicesubcategory actual) {
        assertServicesubcategoryUpdatableFieldsEquals(expected, actual);
        assertServicesubcategoryUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertServicesubcategoryAutoGeneratedPropertiesEquals(Servicesubcategory expected, Servicesubcategory actual) {
        assertThat(expected)
            .as("Verify Servicesubcategory auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertServicesubcategoryUpdatableFieldsEquals(Servicesubcategory expected, Servicesubcategory actual) {
        assertThat(expected)
            .as("Verify Servicesubcategory relevant properties")
            .satisfies(e -> assertThat(e.getName()).as("check name").isEqualTo(actual.getName()))
            .satisfies(e -> assertThat(e.getDescription()).as("check description").isEqualTo(actual.getDescription()))
            .satisfies(e -> assertThat(e.getMainid()).as("check mainid").isEqualTo(actual.getMainid()))
            .satisfies(e -> assertThat(e.getMainname()).as("check mainname").isEqualTo(actual.getMainname()))
            .satisfies(e -> assertThat(e.getLmu()).as("check lmu").isEqualTo(actual.getLmu()))
            .satisfies(e -> assertThat(e.getLmd()).as("check lmd").isEqualTo(actual.getLmd()))
            .satisfies(e -> assertThat(e.getIsactive()).as("check isactive").isEqualTo(actual.getIsactive()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertServicesubcategoryUpdatableRelationshipsEquals(Servicesubcategory expected, Servicesubcategory actual) {}
}
