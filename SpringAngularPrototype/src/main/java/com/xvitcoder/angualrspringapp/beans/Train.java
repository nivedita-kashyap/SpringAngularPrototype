package com.xvitcoder.angualrspringapp.beans;

/**
 * Created with IntelliJ IDEA. User: xvitcoder Date: 12/21/12 Time: 12:19 AM
 */
public class Train {
	private Long id;
	private String name;
	private Integer speed;
	private String region;
	private Boolean diesel;

	public Train() {
	}

	public Train(Long id, String name, Integer speed, String region,
			Boolean diesel) {
		this.id = id;
		this.name = name;
		this.speed = speed;
		this.region = region;
		this.diesel = diesel;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSpeed() {
		return speed;
	}

	public void setSpeed(Integer speed) {
		this.speed = speed;
	}

	public Boolean getDiesel() {
		return diesel;
	}

	public void setDiesel(Boolean diesel) {
		this.diesel = diesel;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

}
