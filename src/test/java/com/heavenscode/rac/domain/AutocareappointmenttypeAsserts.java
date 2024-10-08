package com.heavenscode.rac.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class AutocareappointmenttypeAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAutocareappointmenttypeAllPropertiesEquals(Autocareappointmenttype expected, Autocareappointmenttype actual) {
        assertAutocareappointmenttypeAutoGeneratedPropertiesEquals(expected, actual);
        assertAutocareappointmenttypeAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAutocareappointmenttypeAllUpdatablePropertiesEquals(
        Autocareappointmenttype expected,
        Autocareappointmenttype actual
    ) {
        assertAutocareappointmenttypeUpdatableFieldsEquals(expected, actual);
        assertAutocareappointmenttypeUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAutocareappointmenttypeAutoGeneratedPropertiesEquals(
        Autocareappointmenttype expected,
        Autocareappointmenttype actual
    ) {
        assertThat(expected)
            .as("Verify Autocareappointmenttype auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAutocareappointmenttypeUpdatableFieldsEquals(
        Autocareappointmenttype expected,
        Autocareappointmenttype actual
    ) {
        assertThat(expected)
            .as("Verify Autocareappointmenttype relevant properties")
            .satisfies(e -> assertThat(e.getTypename()).as("check typename").isEqualTo(actual.getTypename()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAutocareappointmenttypeUpdatableRelationshipsEquals(
        Autocareappointmenttype expected,
        Autocareappointmenttype actual
    ) {}
}
